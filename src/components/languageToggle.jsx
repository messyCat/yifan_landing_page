import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

// 定义支持的语言列表
const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  // ...添加更多语言
];

export const LanguageToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLang = i18n.language

  return (
    <div
      className="dropdown"
      style={{ position: 'relative' }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="btn btn-custom btn-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {languages.find(lang => lang.code === currentLang)?.label || 'Language'} ▼
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: '4px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            zIndex: 1000,
            minWidth: '120px'
          }}
        >
          {languages.map(lang => (
            <div
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
                setIsOpen(false);
              }}
              style={{
                padding: '8px 15px',
                cursor: 'pointer',
                // backgroundColor: currentLang === lang.code ? '#f5f5f5' : '#fff',
                display: currentLang === lang.code ? 'none' : 'block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f5';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  currentLang === lang.code ? '#f5f5f5' : '#fff';
              }}
            >
              {lang.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}; 