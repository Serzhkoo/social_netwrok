import React from 'react';
import { create } from 'react-test-renderer';
import { ProfileStatus } from './ProfileStatus';

describe('ProfileStatus component', () => {
  test('status from props should be in the state', () => {
    const component = create(<ProfileStatus status={'status'} updateUserStatus={() => {
    }}/>);
    const instance: any = component.getInstance();
    expect(instance.state.status).toBe('status');
  });

  test('span status should be displayed', () => {
    const component = create(<ProfileStatus status={'status'} updateUserStatus={() => {
    }}/>);
    const root = component.root;
    const span = root.findByType('span');
    expect(span).not.toBe(null);
  });

  test('input status shouldn\'t be displayed', () => {
    const component = create(<ProfileStatus status={'status'} updateUserStatus={() => {
    }}/>);
    const root = component.root;
    expect(() => {
      const input = root.findByType('input');
    }).toThrow();
  });

  test('span should contain correct status', () => {
    const component = create(<ProfileStatus status={'status'} updateUserStatus={() => {
    }}/>);
    const root = component.root;
    const span = root.findByType('span');
    expect(span.children[0]).toBe('status');
  });

  test('input should be displayed in editMode instead of the span', () => {
    const component = create(<ProfileStatus status={'status'} updateUserStatus={() => {
    }}/>);
    const root = component.root;
    const span = root.findByType('span');
    span.props.onDoubleClick();
    const input = root.findByType('input');
    expect(input.props.value).toBe('status');
  });

  test('callback should be called', () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status={'status'} updateUserStatus={mockCallback}/>);
    const instance = component.getInstance();
    //@ts-ignore
    instance.deActivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});