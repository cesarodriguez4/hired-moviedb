import PropTypes from 'prop-types';

export const LanguageSelector = ({language, onLanguageChange}) => {
    return <div className="my-2">
        Language:
        <select value={language} onChange={onLanguageChange}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
        </select>
    </div>
};

LanguageSelector.propTypes = {
    language: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired
};
