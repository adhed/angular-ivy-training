import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

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

  private assignElements(limit: number = 100): void {
    this.elements = Array(limit).fill(0).map((x, index) => index + 1);
  }
}
