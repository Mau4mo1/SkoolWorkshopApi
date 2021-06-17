import { Request, Response, NextFunction } from 'express';
import CrudController from './CrudController';
import { createMollieClient, SequenceType, PaymentMethod, PaymentStatus } from '@mollie/api-client';
import Controller from './Controller';

const mollieClient = createMollieClient({ apiKey: 'test_W3pnKvRm2cGtzQUdzEhnCVWWEMG7p5' });



export default class PaymentController extends Controller {


	async getById(request: Request, response: Response, next: NextFunction): Promise<void>{
        mollieClient.payments.get(request.body.id)
        .then(payment => {
            console.log(payment)
            response.status(200);
            if(payment.status == PaymentStatus.paid){
                response.status(200).json("Da hedde goed gedaan kut");
                console.log("Je hebt nooit geen geld boef");
            }
            if(payment.status == PaymentStatus.canceled){
                response.status(401).json("Gecanceled");
                console.log("Gecanceled net als maurice");
            }
            if(payment.status == PaymentStatus.failed){
                response.status(401).json("Gefaald");
                console.log("Gefaald net als je leven");
            }
            if(payment.status == PaymentStatus.expired){
                response.status(401).json("te laat");
                console.log("Ge hebt de bus gemist kut");
            }
          // E.g. check if the payment.isPaid()

        })
        .catch(error => {
            response.status(500).json("foutje kut")
          // Handle the error
        });
    }
	async create(request: Request, response: Response, next: NextFunction): Promise<void>{
        console.log(request.body.money);
        mollieClient.payments.create({
            amount: {
              value:    request.body.money,
              currency: "EUR"
            },
            sequenceType : SequenceType.oneoff,
            method : PaymentMethod.ideal,
            
            description: request.body.description,
            redirectUrl: "https://www.digitalocean.com/community/tutorials/how-to-use-the-javascript-fetch-api-to-get-data",
            webhookUrl: "https://skool-workshop.herokuapp.com/api/v1/payment/"
          })
            .then(payment => {
                if(payment.isOpen()){
                    response.status(200).json(payment._links.checkout);
                    console.log(payment._links.checkout, payment.id);
                } 
                    else{
                    response.status(400).json({error: "Betalen kut"});
                }
                
              // Forward the customer to the payment.getCheckoutUrl()
            })
            .catch(error => {
                response.status(500).json({error: error});
            });
    }
	async update(request: Request, response: Response, next: NextFunction): Promise<void>{

    }
	async delete(request: Request, response: Response, next: NextFunction): Promise<void>{

    }
}


