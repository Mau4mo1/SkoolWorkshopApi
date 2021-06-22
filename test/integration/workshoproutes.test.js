const chai = require("chai");
const chaiHttp = require("chai-http");
const server = 'https://skool-workshop.herokuapp.com/';

chai.should();
chai.use(chaiHttp);

describe("Api testing", () => {
    describe("Categories",  () => {
        it("All catagories get called", (done) => {          
            chai.request(server)
				.get("api/v1/category/")
				.end((err, res) => {
                    console.log(res);
					res.should.have.status(200);
					done();
			});
        });

        it("All catagories get called wrong", (done) => {          
            chai.request(server)
				.get("api/v1/category/0")
				.end((err, res) => {
                    console.log(res);
					res.should.have.status(404);
					done();
			});
        });
    });

    describe("Workshop",  () => {
        it("Workshop gets called", (done) => {          
            chai.request(server)
				.get("api/v1/workshop/2")
				.end((err, res) => {
                    res.should.have.status(200);
					done();
			});
        });

        it("Workshop that does not exist gets called", (done) => {          
            chai.request(server)
				.get("api/v1/workshop/0")
				.end((err, res) => {
                    res.should.have.status(500);
					done();
			});
        });
    })
    describe("Pictures",  () => {
        it("Pictures get called", (done) => {          
            chai.request(server)
                .get("api/v1/picture/1")
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
            });
        });
    })
});
