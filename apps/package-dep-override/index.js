import leftPad from 'local-lpad';

export const lpad = (string, spaces) => {
    return leftPad(string, '    ');
}
