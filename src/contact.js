export {generatePage, createContactNode};

function createContactNode(){
    let contactContainerNode = document.createElement('div');
    let contactNode = document.createElement('div');

    let contactTitle = document.createElement('div');
    let contactBranches = document.createElement('div');
    let contactNumber = document.createElement('div');
    let contactEmail = document.createElement('div');
    let contactCode = document.createElement('div');

    contactTitle.classList.add('title');



    contactTitle.textContent = "Contact us today!";
    contactBranches.textContent = 'Branch Location: Oaki, District 13, Oaklahoma';
    contactNumber.textContent = 'Phone: +1 265 681842';
    contactEmail.textContent = 'sip.cocoa@email.com';
    contactCode.textContent = "Order with code 'OBTYPE' to get 30% off of your first purchase!";

    contactNode.appendChild(contactTitle);
    contactNode.appendChild(contactBranches);
    contactNode.appendChild(contactNumber);
    contactNode.appendChild(contactEmail);
    contactNode.appendChild(contactCode);

    contactNode.classList.add('contact-page');
    contactContainerNode.classList.add('main');
    contactContainerNode.appendChild(contactNode);
    return contactContainerNode;
}

function generatePage(){
    let content = document.querySelector('div#content');

    content.appendChild(createContactNode());
}

/* 
    ORDER NOW!
    Main branches: oaki, oklahoma; typef, District 13.

    Contact info:
        +1 3123 66534
        nobody@yaml.com
    
*/
