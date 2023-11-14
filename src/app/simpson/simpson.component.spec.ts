import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpsonComponent } from './simpson.component';

describe('SimpsonComponent', () => {
  let component: SimpsonComponent;
  let fixture: ComponentFixture<SimpsonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpsonComponent]
    });
    fixture = TestBed.createComponent(SimpsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return p=16 if x0=0, x1=4, num-seg=4, ERROR=0.0001 and f(x)=2x', ()=> {
    const x0: number = 0
    const x1: number = 4
    const numSeg: number = 4
    const numSeg2: number = numSeg*2
    const error: number = 0.0001
    const p: number = component.simpson(x0, x1, numSeg, 1)
    const p2: number = component.simpson(x0, x1, numSeg2, 1)
    const Err: boolean = component.error(p, p2, error)
    expect(Err).toBe(true)
    expect(p).toBe(16)
  })

  it('should return p=0.3333 if x0=0, x1=1, num-seg=4, ERROR=0.0001 and f(x)=x^2', ()=> {
    const x0: number = 0
    const x1: number = 1
    const numSeg: number = 4
    const numSeg2: number = numSeg*2
    const error: number = 0.0001
    const p: number = component.simpson(x0, x1, numSeg, 2)
    const p2: number = component.simpson(x0, x1, numSeg2, 2)
    const Err: boolean = component.error(p, p2, error)
    expect(Err).toBe(true)
    expect(p).toBe(0.3333)
  })

  it('should return p=1.39 if x0=0, x1=4, num-seg=6, ERROR=0.0001 and f(x)=1/x', ()=> {
    const x0: number = 1
    const x1: number = 4
    const numSeg: number = 6
    const numSeg2: number = numSeg*2
    const error: number = 0.001
    const p: number = component.simpson(x0, x1, numSeg, 3)
    const p2: number = component.simpson(x0, x1, numSeg2, 3)
    const Err: boolean = component.error(p, p2, error)
    expect(Err).toBe(true)
    expect(p).toBe(1.39)
  })
});
