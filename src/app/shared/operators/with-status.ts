import {Observable, OperatorFunction, pipe} from "rxjs";
import {catchError, switchMap, tap} from "rxjs/operators";

const DELAY_TIME = 300;

enum ELoadStatus {
  IDLE,
  LOADING,
  LOADED,
  ERROR
}

export class LoadStatus {

  public get isIdle(): boolean {
    return this.status === ELoadStatus.IDLE;
  }

  public get isLoading(): boolean {
    return this.status === ELoadStatus.LOADING;
  }

  public get isLoaded(): boolean {
    return this.status === ELoadStatus.LOADED;
  }

  public get isError(): boolean {
    return this.status === ELoadStatus.ERROR;
  }

  private status: ELoadStatus = ELoadStatus.IDLE;

  public static getInstance(): LoadStatus {
    return new LoadStatus();
  }

  public setIdle(): void {
    this.status = ELoadStatus.IDLE;
  }

  public setLoading(): void {
    this.status = ELoadStatus.LOADING;
  }

  public setLoaded(): void {
    this.status = ELoadStatus.LOADED;
  }

  public setError(): void {
    this.status = ELoadStatus.ERROR;
  }
}

export const withStatus = <T, R>(loadStatus: LoadStatus, project: (param: T) => Observable<R>): OperatorFunction<T, R> => {
  return pipe(
    tap<T>(() => {
      loadStatus.setIdle();
      setTimeout(() => {
        if (loadStatus.isIdle) {
          loadStatus.setLoading();
        }
      }, DELAY_TIME);
    }),
    switchMap(project),
    tap(() => {
      setTimeout(() => {
        loadStatus.setLoaded();
      }, loadStatus.isIdle ? 0 : DELAY_TIME);
    }),
    catchError(error => {
      loadStatus.setError();
      throw error;
    })
  );
};
