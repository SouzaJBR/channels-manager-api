import { Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import { BaseController } from "../../../base/controllers/BaseController";
import { ListChannelsUseCase } from "./ListChannelsUseCase";

@injectable()
export class ListChannelsController extends BaseController {
    constructor(@inject(ListChannelsUseCase) private listChannelsUseCase: ListChannelsUseCase) {
        super();
    }

    async handle(request: Request, response: Response) {
        const result = await this.listChannelsUseCase.execute();

        response.json(result);
    }
}