import { IsNotEmpty, MinLength } from 'class-validator';

export class ProposalDto {
    @IsNotEmpty()
    @MinLength(4)
    readonly title: string;

    @IsNotEmpty()
    @MinLength(10)
    readonly description: string;

    @IsNotEmpty()
    readonly location: string;

    readonly image: string;

    @IsNotEmpty()
    readonly votes: string;

    @IsNotEmpty()
    readonly approved: boolean;
}
