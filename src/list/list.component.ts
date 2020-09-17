import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

export interface MyElement {
  index: number;
  isSelected: boolean;
}

@Component({
  selector: 'my-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() set elementsLimit(limit: number) {
    this.assignElements(limit);
  }

  public elements: MyElement[] = [];


  public onRemoveBtnClick(index: number): void {
    this.elements.splice(this.getCurrentElementIndex(index), 1);
  }

  public onElementClick(index: number): void {
    const element = this.getElement(index);

    element.isSelected = !element.isSelected;
  }

  private assignElements(limit: number = 100): void {
    this.elements = Array(limit)
      .fill(0)
      .map((_x, index) => ({ index, isSelected: false }));
  }

  private getElement(index: number): MyElement {
    return this.elements.find((element: MyElement) => element.index === index);
  }

  private getCurrentElementIndex(oldIndex: number): number {
    return this.elements.findIndex((element: MyElement) => element.index === oldIndex);
  }
}
