//Random Json PlaceHolder Data
async function logUsers() {
    const response = await fetch("https://jsonplaceholder.org/users");
    return await response.json();
}

const randomNumberInRange = (number) => {
    let randomNumber = Math.floor(Math.random() * number) 
    return randomNumber;
};

const randomStatusCase = () => {
    const statusCase = [
        'TURNO ASIGNADO',
        'CASO ACEPTADO',
        'CASO ASIGNADO',
        'CASO ACTIVO'
    ]

    return statusCase[randomNumberInRange(3)];
} 

const response = () => {
   return logUsers().then(response => response[randomNumberInRange(29)].firstname);
}

const notifications = {
    data: [
        {
            idCase: 1,
            nameUserCase: await response(),
            newCase: true,
            statusCase: randomStatusCase(),
            detailCase: [
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '27/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
            ]
        },
        {
            idCase: 2,
            nameUserCase: await response(),
            newCase: false,
            statusCase: randomStatusCase(),
            detailCase: [
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '27/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
            ]
        },
        {
            idCase: 3,
            nameUserCase: await response(),
            newCase: false,
            statusCase: randomStatusCase(),
            detailCase: [
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '27/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
            ]
        },
        {
            idCase: 4,
            nameUserCase: await response(),
            newCase: false,
            statusCase: randomStatusCase(),
            detailCase: [
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '27/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
            ]
        },
        {
            idCase: 5,
            nameUserCase: await response(),
            newCase: true,
            statusCase: randomStatusCase(),
            detailCase: [
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '27/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
            ]
        },
        {
            idCase: 6,
            nameUserCase: await response(),
            newCase: true,
            statusCase: randomStatusCase(),
            detailCase: [
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '27/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
                {
                    nameCase: 'Lorem',
                    dateCase: '28/08/2023',
                    resume: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
                },
            ]
        }
    ]
}

export default notifications