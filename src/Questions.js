export const questions = [
    {
        section: 1,
        items: [
            {
                label: 'Email Id',
                type: 'email',
                id: '1'
            },
            {
                label: 'Password',
                type: 'password',
                id: '2'
            }
        ]
    },
    {
        section: 2,
        items: [
            {
                label: 'First Name',
                type: 'text',
                id: '3'
            },
            {
                label: 'Last Name',
                type: 'text',
                id: '4'
            },
            {
                label: 'Address',
                type: 'text',
                id: '5'
            },
        ]
    },
    {
        section: 3,
        items: [
            {
                label: 'Country Code',
                type: 'select',
                options: ['+91', '+1'],
                id: '6'
            },
            {
                label: 'Phone Number',
                type: 'text',
                id: '7'
            },
            {
                label: 'Accept Terms and Condition',
                type: 'checkBox',
                id: '8'
            },
        ]
    }
]