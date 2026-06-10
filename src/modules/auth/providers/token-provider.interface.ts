export interface ITokenProvider {
    generate(userUID: string): Promise<string>;
    verify(token: string): Promise<string>;
}
