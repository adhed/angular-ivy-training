import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'my-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
  @Input() set elementsLimit(limit: number) {
    this.assignElements(limit);
  }

  public elements: number[] = [];


  public onRemoveBtnClick(index: number): void {
    this.elements.splice(index, 1);
  }

  private assignElements(limit: number = 100): void {
    this.elements = Array(limit).fill(0).map((x, index) => index);
  }
}
