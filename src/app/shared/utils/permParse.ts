import groupBy from "lodash/groupBy";

export interface IPermParsed {
  name: string;
  description: string;
  code?: string;
  children?: IPermParsed[];
}

function perParser(perms: any[]): IPermParsed[] {
  const grouped = groupBy(perms, "object");
  return Object.keys(grouped).map(key => {
    const item = grouped[key][0];
    return {
      name: item.objectName,
      description: item.objectDescription,
      children: grouped[key].map((curr: any) => {
        return {
          name: curr.actionName,
          description: curr.actionDescription,
          code: curr.code,
        };
      }),
    } as IPermParsed;
  });
}

export default perParser;
