import { Request, Response } from 'express';
import { CreateTagService } from '@services/tags/CreateTagService';
import {
  IResponse,
  IResponseParams,
  Response as ResponseHandler,
} from '@utils/Response';

class CreateTagController {
  async handle(
    request: Request,
    response: Response
  ): Promise<Response<IResponse>> {
    const createTagService = new CreateTagService();
    const { name } = request.body;

    await createTagService.execute({ name });

    const responseParams: IResponseParams = {
      statusCode: 201,
    };

    return response.status(201).json(ResponseHandler.set(responseParams));
  }

  constructor() {}
}

export { CreateTagController };
