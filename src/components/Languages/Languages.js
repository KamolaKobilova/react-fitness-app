import React, { useRef } from 'react';
import { Select } from 'antd';
import imageRu from '../../assets/images/sidebar/ru.svg';
import imageUz from '../../assets/images/sidebar/uz.svg';
import { useSelector } from 'react-redux';
import { t } from '../../utils';
import { updateAccount } from '../../redux/auth/reducer';

const Language = () => {
  const myAccount = useSelector(state => state.account);
  const parentRef = useRef('');

  const handleLanguage = lang => {
    updateAccount({lang})
  }

  return (
    <Select
      value={myAccount?.lang || 'uz'}
      className="language-list"
      size="large"
      dropdownClassName="language-items"
      dropdownStyle={{ minWidth: 150 }}
      ref={parentRef}
      dropdownAlign={{
        points: ['tl', 'bl'],
        offset: [0, -200],
      }}
      onChange={handleLanguage}
    >
      <Select.Option value="uz">
        <img src={imageUz} className="flag" alt="UZB flag" />
        <span>{t("O'zbekcha")}</span>
      </Select.Option>
      <Select.Option value="oz">
        <img src={imageUz} className="flag" alt="UZB flag" />
        <span>{t("Ingliz")}</span>
      </Select.Option>
      <Select.Option value="ru">
        <img src={imageRu} className="flag" alt="RUS flag" />
        <span>{t("Ruscha")}</span>
      </Select.Option>
    </Select>
  );
}

export default Language;
