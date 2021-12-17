import userApi from "../../api/userApi";
import React, {useState, useEffect} from "react";
import Navibar from "../../components/Navibar";
import '../../styles/style.css'
import {
    Form,
    Input,
    Upload,
    Popconfirm,
    Tooltip, DatePicker,
    Typography, Select
} from "antd";
import 'antd/lib/upload/style/index.css';
import 'antd/lib/tooltip/style/index.css';
import 'antd/lib/popconfirm/style/index.css';
import {DeleteOutlined, CameraOutlined} from "@ant-design/icons";
import {useHistory, useParams} from "react-router-dom";
import ReactInputMask from "react-input-mask";
import notificationLogic from "../../components/Notifications/Notification";
import avatar from "../../assets/images/default_user_image.png";
import moment, { Moment } from "moment";
import {
  fileIsUpload,
  fileIsNotUpload,
  possibleFileExtensions,
  fileIsTooBig,
  maxLength,
  successfulEditAction,
  tryAgain,
  shouldContain,
  emptyInput,
  minLength, incorrectPhone
} from "../../components/Notifications/Messages";
import {User, Gender, UserWork, Work} from "./Interface/Interface";
import SubmitButton from "../../components/submitButton";
const { Text } = Typography;



const UserPage = () => {
    const history = useHistory();
    const onlyLettersPattern = /^[a-zA-Zа-яА-ЯІіЄєЇїҐґ'`()]{1,50}((\s|-)[a-zA-Zа-яА-ЯІіЄєЇїҐґ'`()]{0,50})*$/;
    const allVariantsPattern = /^[a-zA-Zа-яА-ЯІіЄєЇїҐґ'`()!@#$%:"{}:\"\'&*_+=%;₴~№",.0-9]{1,50}((\s|-)[a-zA-Zа-яА-ЯІіЄєЇїҐґ'`()!@#$%:"{}:\"\'&*_+=%;₴~№",.0-9]{0,50})*$/;
    const wrongOnlyLettersMessage = shouldContain("тільки літери");
    const wrongAllVariantsMessage = shouldContain("літери, символи та цифри");
    const [form] = Form.useForm();
    const MIN_AVAILABLE_DATE = "01.01.1900";
    const [gender, setGender] = useState<Gender>();
    const [userInfo, setUserInfo] = useState<any>();
    const [placeOfWorkID, setPlaceOfWorkID] = useState<any>();
    const [positionID, setPositionID] = useState<any>();
    const [birthday, setBirthday] = useState<Moment>();
    const [userAvatar, setUserAvatar] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [photoName, setPhotoName] = useState<any>(null);
    const [defaultPhotoName, setDefaultPhotoName] = useState<string>("default_user_image.png");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const fetchData = async () => {
        let currentUserId = userApi.getActiveUserId();
        setLoading(true);
        await userApi.getUserProfileById(currentUserId, currentUserId)
            .then(async (response) => {
                console.log(response);
                setUserInfo(response.data);
                if (response.data.imagePath !== undefined) {
                    await userApi
                        .getImage(response.data.imagePath)
                        .then((q: { data: any }) => {
                            setUserAvatar(q.data);
                        })
                        .catch(() => {
                            notificationLogic("error", fileIsNotUpload("фото"));
                        });
                    setPhotoName(response.data.imagePath);
                } else {
                    notificationLogic("error", fileIsNotUpload("даних"));
                }
                form.setFieldsValue({
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    fatherName: response.data.fatherName,
                    birthday: moment(response.data.birthday),
                    genderName: response.data.gender?.name,
                    placeOfWork: response.data.work?.placeOfwork,
                    address: response.data.address,
                    phoneNumber: response.data.phoneNumber
                });
                setPlaceOfWorkID(response.data.work?.placeOfWorkID);
                setPositionID(response.data.work?.positionID);
                setGender(response.data.gender);
                if (response.data.birthday === "0001-01-01T00:00:00") {
                    form.setFieldsValue({ 'birthday': undefined });
                } else {
                    form.setFieldsValue({ 'birthday': moment.utc(response.data.birthday).local() });
                }
                if (response.data.phoneNumber === null) {
                    setPhoneNumber("");
                } else {
                    setPhoneNumber(response.data.phoneNumber);
                }
                setLoading(false)
            })
            .catch(() => {
                notificationLogic("error", tryAgain);
            });
    };

    useEffect(() => {
        fetchData();
    }, [form]);

    function disabledDate(current: moment.Moment) {
        let date = moment().endOf('day');
        return current && (current > date) || current.isBefore(MIN_AVAILABLE_DATE);
    }

    const validationSchema = {
        name: [
            {max: 25, message: maxLength(25)},
            {min: 2, message: minLength(2)},
            {required: true, message: emptyInput()},
            {pattern: onlyLettersPattern, message: wrongOnlyLettersMessage},
        ],
        surName: [
            {max: 25, message: maxLength(25)},
            {min: 2, message: minLength(2)},
            {required: true, message: emptyInput()},
            {pattern: onlyLettersPattern, message: wrongOnlyLettersMessage},
        ],
        fatherName: [
            {max: 25, message: maxLength(25)},
            {min: 2, message: minLength(2)},
            {pattern: onlyLettersPattern, message: wrongOnlyLettersMessage},
        ],
        gender: [
            { required: true, message: emptyInput() },
        ],
        birthday: [
            { required: true, message: emptyInput() },
        ],placeOfWork: [
            { max: 50, message: maxLength(50) },
            { pattern: allVariantsPattern, message: wrongAllVariantsMessage },
        ],
        position: [
            { max: 50, message: maxLength(50) },
            { pattern: allVariantsPattern, message: wrongAllVariantsMessage }
        ],
        address: [
            { max: 50, message: maxLength(50) },
            { required: true, message: emptyInput() },
            { pattern: allVariantsPattern, message: wrongAllVariantsMessage },
        ],
        phone: [{
            pattern: /^((\+?3)?8)?((0\(\d{2}\)?)|(\(0\d{2}\))|(0\d{2}))-\d{3}-\d{2}-\d{2}$/,
            message: incorrectPhone},
           {required: true, message: emptyInput()},
        ],
    };

    const changeApostropheInWord = (word: string) => {
        return word.replace(/`/g, '\'');
    };

    const setFirstLettersUpperCased = (word: string) => {
        if (word.length == 0) {
            return word;
        }

        let parts = word.split(/[- ]+/);

        parts = parts.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase());

        if (word.includes('-')) {
            return parts.join('-');
        } else if (word.includes(' ')) {
            return parts.join(' ');
        } else {
            return parts.join('');
        }
    };

    const getBase64 = (img: Blob, callback: Function) => {
        const reader = new FileReader();
        reader.addEventListener("load", () => callback(reader.result));
        reader.readAsDataURL(img);
    };

    const checkFile = (size: number, fileName: string) => {
        const extension = fileName.split(".").reverse()[0].toLowerCase();
        const isCorrectExtension =
            extension.indexOf("jpeg") !== -1 ||
            extension.indexOf("jpg") !== -1 ||
            extension.indexOf("png") !== -1;
        if (!isCorrectExtension) {
            notificationLogic("error", possibleFileExtensions("png, jpg, jpeg"));
        }

        const isSmaller2mb = size <= 3145728;
        if (!isSmaller2mb) {
            notificationLogic("error", fileIsTooBig(3));
        }

        return isCorrectExtension && isSmaller2mb;
    };

    const handleUpload = (info: any) => {
        if (info !== null) {
            if (checkFile(info.file.size, info.file.name)) {
                getBase64(info.file, (imageUrl: any) => {
                    setUserAvatar(imageUrl);
                });
                setPhotoName(null);
                notificationLogic("success", fileIsUpload("Фото"));
            }
        } else {
            setUserAvatar(avatar);
            notificationLogic("error", fileIsNotUpload("фото"));
        }
    };

    const handleOnChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        form.setFieldsValue({firstName: setFirstLettersUpperCased(changeApostropheInWord(event.target.value))});
    }

    const handleOnChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        form.setFieldsValue({lastName: setFirstLettersUpperCased(changeApostropheInWord(event.target.value))});
    }

    const handleOnChangeFathersName = (event: React.ChangeEvent<HTMLInputElement>) => {
        form.setFieldsValue({fatherName: setFirstLettersUpperCased(changeApostropheInWord(event.target.value))});
    }

    const changePhoneNumber = (event: any) => {
        setPhoneNumber(event.target.value);
    };
    const handleOnChangeGender = (value: any) => {
        setGender(JSON.parse(value));
    };

    const handleOnChangeBirthday = (event: any, value: any) => {
        if (value === "") {
            setBirthday(undefined);
        } else {
            setBirthday(moment.utc(event?._d).local());
        }
    };

    const handleDeletePhoto = async () => {
        await userApi
            .getImage(defaultPhotoName)
            .then((q: { data: any }) => {
                setUserAvatar(q.data);
            })
            .catch(() => {
                notificationLogic("error", fileIsNotUpload("фото"));
            });
        setPhotoName(defaultPhotoName);
    };


    const handleSubmit = async (values: any) => {
        setLoading(true);
        const newUserProfile = {
            user: {
                id: userInfo?.id,
                firstName: values.firstName?.trim(),
                lastName: values.lastName?.trim(),
                fatherName: values.fatherName?.trim(),
                phoneNumber: phoneNumber?.trim(),
                birthday: form?.getFieldValue('birthday'),
                imagePath: photoName,
                work: {
                    placeOfWork: values.placeOfWork?.trim(),
                    position: values.positionOfWork?.trim(),
                },
                gender: gender,
                address: values.address?.trim(),
            },
            imageBase64: userAvatar,
            workView: {
                placeOfWorkID: placeOfWorkID,
                positionID: positionID,
            },
        }
        await userApi
            .put(newUserProfile)
            .then(() => {
                notificationLogic("success", successfulEditAction("Дані"));
                history.push(`/userpage`);
            })
            .catch(() => {
                notificationLogic("error", tryAgain);
            });
        fetchData();
        setLoading(false)
    };

    return (
        <>
            <Navibar/>
            <div className="contact">
                <div className="php-email-form container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <div>
                                    <div className="mt-5 buttonsImage">
                                        <img src={userAvatar} className="rounded-circle"/>
                                        <Upload
                                            name="avatar"
                                            className="changeAvatar"
                                            showUploadList={false}
                                            accept=".jpeg,.jpg,.png"
                                            customRequest={handleUpload}
                                        >
                                            <Tooltip placement={"bottom"}
                                                     title={"Завантажити фото"}>
                                                <CameraOutlined className="changeAvatarBtn"/>
                                            </Tooltip>
                                        </Upload>
                                    </div>
                                    {photoName !== defaultPhotoName ?
                                        <Tooltip title="Видалити фото">
                                            <Popconfirm
                                                title="Видалити фото?"
                                                placement="bottom"
                                                icon={false}
                                                onConfirm={() => handleDeletePhoto()}
                                                okText="Так"
                                                cancelText="Ні">
                                                <DeleteOutlined
                                                    className="deleteIcon"
                                                    key="close"
                                                />
                                            </Popconfirm>
                                        </Tooltip> : null}
                                </div>
                                <span
                                    className="font-weight-bold">{userInfo?.firstName} {userInfo?.lastName}</span>
                                <span
                                    className="text-black-50">{userInfo?.email}</span>
                            </div>
                        </div>
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Редагування профілю</h4>
                                </div>
                                <div className="row mt-2">
                                    <Form
                                        name="EditUserPage"
                                        form={form}
                                        onFinish={handleSubmit}
                                    >
                                        <div className="row mt-3">
                                          <Form.Item
                                              label="Прізвище"
                                              name="lastName"
                                              rules={validationSchema.surName}
                                              className="col-md-12">
                                            <Input className="form-control" onChange={handleOnChangeLastName} maxLength={50} />
                                          </Form.Item>
                                          <Form.Item
                                              label="Ім'я"
                                              name="firstName"
                                              rules={validationSchema.name}
                                              className="col-md-12">
                                            <Input className="form-control" onChange={handleOnChangeFirstName} maxLength={50} />
                                          </Form.Item>
                                          <Form.Item
                                              label="По батькові"
                                              name="fatherName"
                                              rules={validationSchema.fatherName}
                                              className="col-md-12">
                                            <Input className="form-control" onChange={e => handleOnChangeFathersName(e)} maxLength={50} />
                                          </Form.Item>
                                            <Form.Item
                                                label="Дата народження"
                                                name="birthday"
                                                className="col-md-12"
                                                rules={validationSchema.birthday}
                                            >
                                                <input
                                                    className="form-control"
                                                    type="date"
                                                    placeholder="Дата народження"
                                                    onChange={handleOnChangeBirthday as any}
                                                />
                                            </Form.Item>
                                          <Form.Item
                                              label="Номер телефону"
                                              name="phoneNumber"
                                              className="col-md-12"
                                              rules={validationSchema.phone}
                                          >
                                            <ReactInputMask
                                                mask="+380(99)-999-99-99"
                                                value={phoneNumber}
                                                onChange={changePhoneNumber}
                                                className="form-control"
                                            >
                                              {(inputProps: any) => <Input {...inputProps} />}
                                            </ReactInputMask>
                                          </Form.Item>
                                        </div>
                                        <Form.Item>
                                            <SubmitButton title="Зберегти"/>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center experience">
                                    <span>Інформація про приєднання</span>
                                </div>
                                <br/>
                                <div className="col-md-12">
                                    <Form.Item
                                        label={(<Text>Дата приєднання до системи</Text>)}
                                        className='w100'
                                    >
                                        {moment.utc(userInfo?.registredOn).local().format("DD.MM.YYYY")}
                                    </Form.Item>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPage;
