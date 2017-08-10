let dummyDataMessages =
	[{ message: 'Veniam qui voluptate aute proident laboris non.' },
	{ message: 'Mollit irure elit adipisicing amet proident ea.' },
	{ message: 'Ex magna ad nostrud sunt fugiat culpa amet voluptate aliqua voluptate laboris ut id enim.' },
	{ message: 'Et consectetur ex aliquip dolore laborum deserunt labore occaecat velit ea reprehenderit minim sit cupidatat.' },
	{ message: 'Nulla reprehenderit duis ad sint et in cillum quis laborum laborum.' },
	{ message: 'Velit tempor ullamco deserunt aute in in anim consequat reprehenderit incididunt ipsum ut duis cillum.' },
	{ message: 'Occaecat voluptate aute labore ex veniam labore adipisicing.' },
	{ message: 'Ullamco in id aliqua do sunt sunt voluptate.' },
	{ message: 'Sit laboris nostrud amet qui fugiat adipisicing.' },
	{ message: 'Fugiat est proident ullamco irure laboris voluptate cillum veniam ullamco amet.' },
	{ message: 'Proident dolore elit voluptate deserunt voluptate aliqua veniam est.' },
	{ message: 'Consequat aliqua commodo magna sint qui do sint ut consequat velit magna dolore.' },
	{ message: 'Lorem aute anim quis incididunt non.' },
	{ message: 'Esse nostrud ea sint proident.' },
	{ message: 'Eu Lorem mollit adipisicing aliqua.' },
	{ message: 'Minim amet reprehenderit elit eiusmod.' },
	{ message: 'Ut officia et voluptate et laborum eu aliquip reprehenderit excepteur consectetur eiusmod.' },
	{ message: 'Proident id cillum cupidatat nulla ullamco occaecat cillum elit reprehenderit dolor minim et culpa duis.' },
	{ message: 'Sit ea esse adipisicing magna ad incididunt sint sit non pariatur aute ipsum veniam sunt.' },
	{ message: 'Aliquip deserunt reprehenderit ea eu reprehenderit.' },
	{ message: 'Eiusmod sunt ea velit ex consectetur reprehenderit pariatur ipsum Lorem sit in enim reprehenderit.' },
	{ message: 'Proident ullamco excepteur qui enim fugiat et ea ut qui laborum ad.' }];


let results = [];


function getShortMessages(messages) {
	for (let i = 0; i < dummyDataMessages.length; i++) {	
		if(dummyDataMessages[i].message.length < 50){
			results.push(dummyDataMessages[i].message);
		}
	}
}

const start = new Date();
getShortMessages(dummyDataMessages);
console.log(new Date() - start, "milliseconds")
// console.log(results)