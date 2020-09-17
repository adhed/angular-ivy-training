import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ListComponent } from "./list.component";


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeAll(done =>
    (async () => {
      TestBed.configureTestingModule({
        declarations: [ListComponent],
      });
      await TestBed.compileComponents();
    })()
      .then(done)
      .catch(done.fail)
  );

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find element in my elements array', () => {
    component.elementsLimit = 3;
    const expectedIndex = 2;
    const element = component['getElement'](expectedIndex);

    expect(element.index).toBe(expectedIndex);
  });

  it('should current element index even if some elements have been removed', () => {
    component.elementsLimit = 3;
    const oldIndex = 2;
    const element = component['findElementIndex'](oldIndex);

    expect(element.index).toBe(oldIndex);
  });

  it('should change element selected state when clicked once', () => {
    const elementIndex = 2;

    component.elementsLimit = 3;
    component.onElementClick(elementIndex);

    const element = component['getElement'](elementIndex);

    expect(element.isSelected).toBe(true);
  });

  it('should reset element selected state when clicked twice', () => {
    const elementIndex = 2;

    component.elementsLimit = 3;
    component.onElementClick(elementIndex);
    component.onElementClick(elementIndex);

    const element = component['getElement'](elementIndex);

    expect(element.isSelected).toBe(false);
  });

  it('should remove element from the array', () => {
    const elementsLength = 3;

    component.elementsLimit = elementsLength;
    component.onRemoveBtnClick(2);

    expect(component.elements.length).toBe(elementsLength - 1);
  });
});
