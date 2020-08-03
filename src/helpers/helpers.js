export function returnLanguageId(languageName){
    if (languageName === "EN") return 1;
    else if(languageName === "AR") return 2;
    else return 3;
}

export function returnLanguageName(languageId){
    if (languageId === 1) return 'EN';
    else if(languageId === 2) return 'AR';
    else return 'FR';
}

