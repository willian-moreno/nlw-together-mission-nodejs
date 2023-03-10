import { Request, Response } from 'express';
import { RemoveUserService } from '@services/users/RemoveUserService';
import {
  IResponse,
  IResponseParams,
  Response as ResponseHandler,
} from '@utils/Response';

class RemoveUserController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const removeUserService = new RemoveUserService();
    const { id } = request.params;
    const status = await removeUserService.execute({ id });

    const responseParams: IResponseParams = {
      statusCode: 200,
      data: status,
    };

    return response.status(200).json(ResponseHandler.set(responseParams));
  }

  constructor() {}
}

export { RemoveUserController };
