import { ArticleService } from './article.service';
import { ArticleCreateDTO } from './dto/article-create.dto';
import { ArticleQueryDTO } from './dto/article-query.dto';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    list(dto: ArticleQueryDTO): Promise<any>;
    detail(id: string): Promise<any>;
    create(dto: ArticleCreateDTO, req: any): Promise<any>;
    update(): Promise<string>;
    delete(id: string): Promise<any>;
}
