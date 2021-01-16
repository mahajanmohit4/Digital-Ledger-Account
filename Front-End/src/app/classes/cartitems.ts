export class Cartitems {

    CID: number ;
    PID: number ;
    PName: string | undefined;
    PQuantity: number | undefined;
    PCP: any | undefined;
    PDisc: string | undefined;
    PSP: number | undefined;    
    TAmount: number | undefined;
    IQuanitity: number | undefined;
    ID: number | undefined;


    constructor(cid:number, pid:number, pname:string, pdisc:string, pquantity:number, pcp:number,  psp:number ){
        this.CID = cid;
        this.PID = pid;
        this.PName = pname;
        this.PQuantity = pquantity;
        this.PCP = pcp;
        this.PDisc = pdisc;
        this.PSP = psp;
    }
}
