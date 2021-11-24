import bcrypt from 'bcrypt';

const data = {
    users: [
        {
            name: 'Kley',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'David',
            email: 'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products:[
        {
           
            name: 'Produto 1',
            categoria: 'Categoria',
            imagem: '/images/p1.png',
            price: 120,
            countInStock: 10,
            marca: 'Marca',
            rating: 4.5,
            numReviews: 10,
            description: 'Produto de alta qualidade',
        },
        {
            
            name: 'Produto 2',
            categoria: 'Categoria',
            imagem: '/images/p2.png',
            price:  256,
            countInStock: 20,
            marca: 'Marca',
            rating: 4.0,
            numReviews: 14,
            description: 'Produto de alta qualidade',
        },
        {
            
            name: 'Produto 3',
            categoria: 'Categoria',
            imagem: '/images/p3.png',
            price: 15,
            countInStock: 0,
            marca: 'Marca',
            rating: 2,
            numReviews: 17,
            description: 'Produto de alta qualidade',
        },
        {
            
            name: 'Produto 4',
            categoria: 'Categoria',
            imagem: '/images/p4.png',
            price: 220,
            countInStock: 15,
            marca: 'Marca',
            rating: 5,
            numReviews: 14,
            description: 'Produto de alta qualidade',
        },
        {
            
            name: 'Produto 5',
            categoria: 'Categoria',
            imagem: '/images/p5.png',
            price: 123,
            countInStock: 5,
            marca: 'Marca',
            rating: 3,
            numReviews: 10,
            description: 'Produto de alta qualidade',
        },
        {
            
            name: 'Produto 6',
            categoria: 'Categoria',
            imagem: '/images/p6.png',
            price: 12,
            countInStock: 12,
            marca: 'Marca',
            rating: 4.5,
            numReviews: 15,
            description: 'Produto de alta qualidade',
        },
    ],
};

export default data;