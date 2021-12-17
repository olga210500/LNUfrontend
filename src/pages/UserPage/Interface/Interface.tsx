export type Gender={
    id:number;
    name:string;
}
export type Work={
    id:number;
    placeOfwork: string;
    position: string;
}

export type UserWork={
    placeOfWorkID:number|undefined;
    placeOfWorkList:Work[];
    positionID:number|undefined;
    positionList:Work[];
}

export type User ={
    id:any;
    firstName: string;
    lastName: string;
    fatherName:string;
    address: string;
    birthday: Date;
    gender: Gender;
    imagePath:string;
    phoneNumber: string;
    email: string;
    registredOn: Date;
}