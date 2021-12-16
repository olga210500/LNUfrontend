import React from "react";
import { Button } from "antd";
import googleImg from "../../assets/images/google.png";
import { GoogleLogin } from 'react-google-login';


const GoogleLoginWrapper = (props: any) => {
    return (
    <div className="text-center">
        <GoogleLogin
            clientId={props.googleId}
            render={(renderProps: any) => (
                <Button onClick={renderProps.onClick}  id="googleBtn" className="rounded socialButton">
                    <p id="imgSpanGoogle">
                        <img
                            alt="Google icon"
                            className="socialImg p-1"
                            src={googleImg}
                        />
                    </p>
                    <p className="btnText">{props.signUp
                        ? <>Зареєструватись</>
                        : <>Увійти</> } з <br/>Google</p>
                </Button>
            )}

            buttonText="Login"
            onSuccess={props.handleGoogleResponse}
            onFailure={props.getIdprop}
            cookiePolicy={'single_host_origin'}
        />
        </div>
    )
}
export default GoogleLoginWrapper;

