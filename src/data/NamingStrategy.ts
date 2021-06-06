import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';
import { titleCase } from 'typeorm/util/StringUtils';

export default class NamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
    joinTableName(firstTableName: string, secondTableName: string, firstPropertyName: string, secondPropertyName: string): string {
        return titleCase(firstTableName + secondTableName);
    }
}
