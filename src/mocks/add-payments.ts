import { PaymentsInterface } from "../types";

export const addPaymentsMocks: Array<PaymentsInterface> = [
    {
        srcImage: "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/14/49/0d/14490d3e-d6aa-b90b-9a1b-db6597cb2f18/AppIcon-1x_U007emarketing-0-5-0-85-220.png/256x256bb.jpg",
        titlePayment: "Zelle Chase",
        valuePayment: "hazelpago@mail.com",
        currency: "USD"
    },
    {
        srcImage: "https://banesco-ve.s3.amazonaws.com/wp-content/uploads/bpm-destacada.png",
        titlePayment: "Pago Movil Banesco",
        valuePayment: "04121704005 Banesco 7962460",
        currency: "VES"
    },
    {
        srcImage: "https://d1nxzqpcg2bym0.cloudfront.net/google_play/com.p2p/35710e8e-b50a-11e7-8e68-0f80c9a2a104/128x128",
        titlePayment: "Transferencia BancaAmiga",
        valuePayment: "01341234123412571236",
        currency: "VES"
    },
]