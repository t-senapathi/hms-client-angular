export interface Doctor{
    username: string;
    password: string;
    pkUserId: number;
    fkRoleId: number;
    firstName: string;
    lastName: string;
    age: number;
    pkDoctorId: string;
    fkUserId: number;
    experience: number;
    doctorSpecialisation: string;
    patientList:[];
}