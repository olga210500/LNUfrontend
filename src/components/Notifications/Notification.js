import {notification} from 'antd';
import 'antd/lib/notification/style/index.css';

const openNotificationWithIcon = (type, text, icon = null) => {
  notification[type]({
    message: 'Сповіщення',
    icon: icon,
    description: text,
    closable: true
  });
};
export default openNotificationWithIcon;