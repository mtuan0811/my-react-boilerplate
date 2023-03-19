import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation , Trans } from "react-i18next";
import i18n from '../../../i18n'

export const Nav = () => {
  const { t } = useTranslation()
  console.log(i18n.language)
  return (
    <Wrapper>
      <Menu>
        <Item><Trans i18nKey="lng"><Link to="/">{t('global.home')}</Link></Trans></Item>
        <Item><Link to="/about">{t('global.about')}</Link></Item>
      </Menu>
      <Select onChange={e => i18n.changeLanguage(e.target.value)} value={i18n.language}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </Select>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: inline;
  list-style: none;
  padding: 1rem;
`;

const Select = styled.select`
  padding: 4px;
  border: none;
  
  option {
    padding: 4px;
    font-size: 14px;
  }
`
