import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../assets/logot.png';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';


const NavBar = () => {
   const { isAuthenticated, logout} = useAuth();  // Obtén el estado de autenticación y la función de logout
   const [showDropdown, setShowDropdown] = useState(false);
   const {t, i18n} =useTranslation();
   const navigate = useNavigate();

   const handleLogout =() =>{
    logout(); //llama a la función  de logout proporcionada por el contexto
    navigate('/login'); //redirige al usuario a la pag de inicio de sesión
   }
   

   const handleLanguageChange = (lang)=>{
     i18n.changeLanguage(lang); // Cambia el idioma usando i18next
     setShowDropdown(false); // Cierra el dropdown después de seleccionar un idioma
   }

  return (
    <nav className='bg-gradient-to-r from-green-300 via-green-600 to-green-900 p-4 flex items-center justify-between' >
      <div className='flex items-center' >
        <img src={logo} alt='logo' className='h-8 w-auto mr-4'/>
        <ul className='flex space-x-4'>
            <li><Link to='/' className='text-white hover:text-gray-200'>{t('home')}</Link></li>
            <li><Link to='/landing' className='text-white hover:text-gray-200'>{t('landingPage')}</Link></li>
            {isAuthenticated &&(
              <>
            <li><Link to='/dashboard' className='text-white hover:text-gray-200'>{t('dashboard')}</Link></li>
            <li><Link to='/profile' className='text-white hover:text-gray-200'>{t('profile')}</Link></li>
            <li><button onClick={handleLogout} className='text-white hover:text-gray-200' >{t('logout')}</button></li>
              </>
              )}
              {!isAuthenticated &&(
                <>
            <li><Link to='/login' className='text-white hover:text-gray-200'>{t('login')}</Link></li>
            <li><Link to='register' className='text-white hover:text-gray-200'>{t('register')}</Link></li>
                </>
              
              )}
        </ul>
      </div>
      <div className='relative'>
        <button
          className='text-white hover:text-gray-200'
          onClick={() => setShowDropdown(!showDropdown)}
        >
          {i18n.language === 'en' ? 'Language' : i18n.language === 'es' ? 'Idioma' : 'Idioma'}
        </button>
        {showDropdown && (
          <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg'>
            <ul>
              <li>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className='block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left'
                >
                  {t('english')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLanguageChange('es')}
                  className='block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left'
                >
                  {t('spanish')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLanguageChange('pt')}
                  className='block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left'
                >
                  {t('portuguese')}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      
    </nav>
  )
}

export default NavBar