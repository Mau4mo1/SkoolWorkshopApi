import { Request, Response, NextFunction } from 'express';
import CrudController from './CrudController';
import { createMollieClient, SequenceType, PaymentMethod } from '@mollie/api-client';
import Controller from './Controller';

const mollieClient = createMollieClient({ apiKey: 'test_pQRK7dmHB3DJN2c3eQFFRN4fDA84DH' });


export default class PaymentController extends Controller {

    async validation(request: Request, response: Response, next: NextFunction) : Promise<void>{

    }
	async getAll(request: Request, response: Response, next: NextFunction): Promise<void>{

    }
	async getById(request: Request, response: Response, next: NextFunction): Promise<void>{
        // mollieClient.payments.get(payment.id)
        // .then(payment => {
        //   // E.g. check if the payment.isPaid()
        // })
        // .catch(error => {
        //   // Handle the error
        // });
    }
	async create(request: Request, response: Response, next: NextFunction): Promise<void>{
        console.log(request.body.money);
        
        mollieClient.payments.create({
            amount: {
              value:    "10.99",
              currency: "EUR"
            },
            method : PaymentMethod.ideal,
            description: "Hoe kut is dat",
            redirectUrl: "https://google.com"
          })
            .then(payment => {
                if(payment.isPaid()){
                    response.status(200).json();
                } else{
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


