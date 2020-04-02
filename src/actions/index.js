export function uuidv4() {
    // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    // All but 6 of the 128 bits of the ID are randomly generated, which means that for any two ids, there's a 1 in 2^^122 (or 5.3x10^^36) chance they'll collide.
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export const addNote = ({title,text,type}) => ({
    type: 'ADD_NOTE',
    id: uuidv4(),
    title,
    text,
    type
})

export const setBodySystem = selected => ({
    type: 'SET_BODY_SYSTEM',
    selected
})

export const setSystemIndicator = filter => ({
    type: 'SET_SYSTEM_INDICATOR',
    filter
})

export const Filters = {
    SHOW_SKIN: 'SHOW_SKIN',
    SHOW_MUSCLES: 'SHOW_MUSCLES',
    SHOW_BLOOD: 'SHOW_BLOOD',
    SHOW_NERVES: 'SHOW_NERVES',
    SHOW_SKELETON: 'SHOW_SKELETON',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
}