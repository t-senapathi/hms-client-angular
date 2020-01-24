export interface CustomRequest<T>{
statusCode:number;
requestId:number;
data:T[];
}