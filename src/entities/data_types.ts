
const regex = {
    code: '[^\s]+(\s[^\s]+)*',
    date: '([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1]))?)?',
    dateTime: '([0-9]([0-9]([0-9][1-9]|[1-9]0)|[1-9]00)|[1-9]000)(-(0[1-9]|1[0-2])(-(0[1-9]|[1-2][0-9]|3[0-1])(T([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?(Z|(\+|-)((0[0-9]|1[0-3]):[0-5][0-9]|14:00)))?)?)?',
    time: '([01][0-9]|2[0-3]):[0-5][0-9]:([0-5][0-9]|60)(\.[0-9]+)?',
    interger: '[0]|[-+]?[1-9][0-9]*',
    uri: '\S*',
    url: '',
    positiveInt: '+?[1-9][0-9]*',
    uuid: '',
    unsignedInt	:'[0]|([1-9][0-9]*)',
        
}

