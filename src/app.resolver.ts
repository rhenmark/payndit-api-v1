import { AppService } from "./app.service";
import { Public } from "./auth/constants";
import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class AppServiceResolver {
    constructor(private readonly appService: AppService) {}

    @Query(() => String)
    @Public()
    hello(): string {
        return "hello"
    }
}