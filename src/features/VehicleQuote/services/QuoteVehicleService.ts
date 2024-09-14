import AppService from "../../../services/AppService";

class QuoteVehicleService extends AppService {

  private path: string;

  constructor() {
    super();
    this.path = 'users';
  }

  async getUserByJsonPlaceHolder() {
    return this.getHttp().get(`${this.path}/1`);
  }

}

export default QuoteVehicleService;
