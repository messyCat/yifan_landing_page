import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation()
    return (
        <div>{t('greeting')}</div>
    )
}

export default About