import { useEffect, useRef, useState } from "react";
import accountApi from "../../../api/userApi";
import { Error } from "../../../components/Alert";
import { LoadingBtn } from "../../../components/Loading";
import { NotifyError } from "./NotifyError";
import { ViewPassWord } from "./ViewPassWord";

export function isCheckAccountName(accountList, userName) {
  const account = accountList.filter((accountItem) => {
    return accountItem.name === userName;
  });

  if (account.length === 0) {
    return false;
  }
  return true;
}

function Register({ setCheckAuth, setCheckRegister }) {
  const initCheckForm = {
    userName: false,
    password: false,
    confirmPassword: false,
  };
  const [loadingBtn, setLoading] = useState(false);
  const [checkForm, setCheckForm] = useState(initCheckForm);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkSubmit, setCheckSubmit] = useState(false);
  const [viewPassWord, setViewPassWord] = useState(false);
  const [viewConfirmPassWord, setViewConfirmPassWord] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const userNameRegisterRef = useRef();
  useEffect(() => {
    userNameRegisterRef?.current.focus();
    const id = setTimeout(() => {
      setRegisterError(false);
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, [registerError]);

  const checkError = (checkTitle, checkFormKey, regex) => {
    if (checkTitle.match(regex) === null) {
      setCheckForm((checkForm) => ({ ...checkForm, [checkFormKey]: true }));
    } else {
      setCheckForm((checkForm) => ({ ...checkForm, [checkFormKey]: false }));
    }
  };
  const checkConfirmPassword = (confirmPassword, password) => {
    if (confirmPassword !== password || confirmPassword === "") {
      setCheckForm((checkForm) => ({ ...checkForm, confirmPassword: true }));
    } else {
      setCheckForm((checkForm) => ({ ...checkForm, confirmPassword: false }));
    }
  };

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
    if (!checkSubmit) return;
    checkError(e.target.value, "userName", /\w{5,255}/);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (!checkSubmit) return;
    checkError(e.target.value, "password", /^[a-zA-Z]\w{3,14}$/);
    checkConfirmPassword(confirmPassword, e.target.value);
  };
  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (!checkSubmit) return;
    checkConfirmPassword(e.target.value, password);
  };
  const handleSubmit = (e) => {
    setLoading(true);
    setCheckSubmit(true);
    checkError(userName, "userName", /\w{5,255}/);
    checkError(password, "password", /^[a-zA-Z]\w{3,14}$/);
    checkConfirmPassword(confirmPassword, password);
    (async () => {
      const accountList = await accountApi.getAll();
      if (
        !isCheckAccountName(accountList, userName) &&
        !checkForm.userName &&
        !checkForm.password &&
        !checkForm.confirmPassword &&
        userName !== "" &&
        password !== "" &&
        confirmPassword !== ""
      ) {
        setRegisterError(false);

        (async () => {
          await accountApi.add({ name: userName, password: password });
          setCheckRegister(true);
          setCheckAuth("Đăng Nhập");
        })();
      } else if (
        isCheckAccountName(accountList, userName) &&
        !checkForm.userName &&
        !checkForm.password &&
        !checkForm.confirmPassword &&
        userName !== "" &&
        password !== "" &&
        confirmPassword !== ""
      ) {
        setRegisterError(true);
      }
      setLoading(false);
    })();
  };
  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      if (e.target.value.trim() === "") return;
      handleSubmit();
    }
  };

  return (
    <div id="Register">
      <div className="container">
        <div className="container__content"></div>
        <div className="content__title">
          <h1>Đăng Kí</h1>
        </div>
        <form action="">
          <div className="input-userName">
            <input
              ref={userNameRegisterRef}
              className={
                !checkForm.userName ? "userName" : "userName error_input_border"
              }
              id="userName-resgiter"
              type="text"
              name="userName"
              placeholder="Tên tài khoản"
              onChange={(e) => handleChangeUserName(e)}
              onKeyPress={handleKeyPress}
            />

            {checkForm.userName && (
              <NotifyError
                text={
                  " Tên tài khoản gồm 5 kí tử trở lên và không có khoảng trắng cũng như các ký tự đặc biệt !"
                }
              />
            )}
          </div>
          <div className="input-password">
            <input
              className={
                !checkForm.password ? "password" : "password error_input_border"
              }
              id="password-resgiter"
              type={!viewPassWord ? "password" : "text"}
              name="password "
              placeholder="Mật khẩu"
              onChange={(e) => {
                handleChangePassword(e);
              }}
              onKeyPress={handleKeyPress}
            />
            <ViewPassWord
              viewPassWord={viewPassWord}
              setViewPassWord={setViewPassWord}
            />
            {checkForm.password && !checkForm.userName && (
              <NotifyError
                text={
                  "Ký tự đầu tiên của mật khẩu phải là một chữ cái, nó phải chứa ít nhất 4 ký tự và không quá 15 ký tự và không được sử dụng các ký tự khác ngoài chữ cái, số và dấu gạch dưới!"
                }
              />
            )}
          </div>
          <div className="input-password-confirm">
            <input
              id="confirmPassword"
              type={!viewConfirmPassWord ? "password" : "text"}
              className={
                !checkForm.confirmPassword
                  ? "password"
                  : "password error_input_border"
              }
              name="confirmPassword"
              placeholder="Xác nhận mật khẩu"
              onChange={(e) => {
                handleChangeConfirmPassword(e);
              }}
              onKeyPress={handleKeyPress}
            />

            <ViewPassWord
              viewPassWord={viewConfirmPassWord}
              setViewPassWord={setViewConfirmPassWord}
            />
            {!checkForm.password && checkForm.confirmPassword && (
              <NotifyError text={"Mật khẩu nhập lại không khớp với nhau !"} />
            )}
          </div>
          {loadingBtn && (
            <div className="btn btn__register btn__register-loading">
              <LoadingBtn />
            </div>
          )}
          {!loadingBtn && (
            <input
              className="btn btn__register"
              type="button"
              value="ĐĂNG KÍ"
              onClick={handleSubmit}
            />
          )}
        </form>

        <div
          className="create-account"
          onClick={() => setCheckAuth("Đăng Nhập")}
        >
          <span className="link-convert-html pagesLogIn-link">Đăng Nhập</span>
        </div>
      </div>
      <div className={registerError ? "alert active-alert" : "alert"}>
        <Error text="Đăng kí thất bại .Tài khoản đã tồn tại !" />
      </div>
    </div>
  );
}

export default Register;
