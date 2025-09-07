import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation()
    return (
        <div
        // style="width=100%;height:100%"
        >
            {t('greeting')}
        </div>
    )
}

export default About