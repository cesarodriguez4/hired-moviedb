export const LanguageSelector = ({language, onLanguageChange}) => {
    return <div className="my-2">
        Language:
        <select value={language} onChange={onLanguageChange}>
            <option value="en-US">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
        </select>
    </div>
}