import { Request, Response, NextFunction } from 'express';
import { createMollieClient, SequenceType, PaymentMethod, PaymentStatus } from '@mollie/api-client';
import Controller from './Controller';

const mollieClient = createMollieClient({ apiKey: 'test_W3pnKvRm2cGtzQUdzEhnCVWWEMG7p5' });

export default class PaymentController extends Controller {
	async getById(request: Request, response: Response, next: NextFunction): Promise<void>{
        mollieClient.payments.get(request.body.id)
        .then(payment => {

            if(payment.status == PaymentStatus.paid){
                response.status(200).json("Succes");
                console.log("is paid");
            }

            if(payment.status == PaymentStatus.canceled){
                response.status(401).json("Gecanceled");
                console.log("is canceled");
            }

            if(payment.status == PaymentStatus.failed){
                response.status(401).json("Gefaald");
                console.log("is failed");
            }

            if(payment.status == PaymentStatus.expired){
                response.status(401).json("Verlopen");
                console.log("is expired");
            }
          // E.g. check if the payment.isPaid()
        })
        .catch(error => {
            response.status(500).json(error)
          // Handle the error
        });
    }

	async create(request: Request, response: Response, next: NextFunction): Promise<void>{
        console.log(request.body.money);

        mollieClient.payments.create({
            amount: {
              value: request.body.money,
              currency: "EUR"
            },
            sequenceType: SequenceType.oneoff,
            method: PaymentMethod.ideal,
            description: request.body.description,
            redirectUrl: "https://media.giphy.com/media/xULW8v7LtZrgcaGvC0/giphy.gif",
            webhookUrl: "https://skool-workshop.herokuapp.com/api/v1/payment/"
          })
            .then(payment => {
                if(payment.isOpen()){
                    response.status(200).json({ 
                        message: payment._links.checkout,
                        id: payment.id
                    });
                    console.log(payment._links.checkout, payment.id);
                } else{
                    response.status(400).json({error: "Payment not succesfull"});
                }
              // Forward the customer to the payment.getCheckoutUrl()
            })
            .catch(error => {
                response.status(500).json({error: error});
            });
    }
}
