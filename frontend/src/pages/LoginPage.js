import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import landingImage from '../assets/images/landing-2x.png';
import './LoginPage.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login, register, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await login({
          email: formData.email,
          password: formData.password,
        });
      } else {
        if (formData.password !== formData.password_confirmation) {
          setError('密碼不相符');
          setLoading(false);
          return;
        }
        await register({
          email: formData.email,
          username: formData.username,
          password: formData.password,
          password_confirmation: formData.password_confirmation,
        });
      }
      navigate('/');
    } catch (err) {
      setError(
        err.response?.data?.status?.message ||
          '發生錯誤，請再試一次。'
      );
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setFormData({
      email: '',
      username: '',
      password: '',
      password_confirmation: '',
    });
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-wrapper">
          {/* Left side - image on login, form on signup */}
          {isLogin ? (
            <div className="login-phones">
              <img src={landingImage} alt="MyIG" />
            </div>
          ) : (
            <div className="login-forms">
              <div className="login-box">
                <div className="login-logo">MyIG</div>

                {error && <div className="error-message">{error}</div>}

                <form className="login-form" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="username"
                    placeholder="用戶名稱"
                    className="login-input"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="手機號碼、用戶名稱或電子郵件地址"
                    className="login-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="密碼"
                    className="login-input"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="password"
                    name="password_confirmation"
                    placeholder="確認密碼"
                    className="login-input"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="submit"
                    className="login-button"
                    disabled={loading}
                  >
                    {loading ? '處理中...' : '註冊'}
                  </button>
                </form>
              </div>

              <div className="signup-prompt">
                已經有帳號了嗎？
                <button onClick={toggleMode}>登入</button>
              </div>
            </div>
          )}

          {/* Right side - form on login, image on signup */}
          {isLogin ? (
            <div className="login-forms">
              <div className="login-box">
                <div className="login-logo">MyIG</div>

                {error && <div className="error-message">{error}</div>}

                <form className="login-form" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="手機號碼、用戶名稱或電子郵件地址"
                    className="login-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="密碼"
                    className="login-input"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />

                  <button
                    type="submit"
                    className="login-button"
                    disabled={loading}
                  >
                    {loading ? '處理中...' : '登入'}
                  </button>
                </form>
              </div>

              <div className="signup-prompt">
                還沒有帳號？
                <button onClick={toggleMode}>註冊</button>
              </div>
            </div>
          ) : (
            <div className="login-phones">
              <img src={landingImage} alt="MyIG" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
