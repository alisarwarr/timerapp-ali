import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme';
import { TimerContent } from '../components';

describe('TimerContent', () => {
    let container: ShallowWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;

    beforeEach(() => {
        container = shallow(
            <TimerContent
                value={0}
            />
        )
    })

    it('should render a <div/>', () => {
        expect(container.find('div').length).toBeGreaterThanOrEqual(1);
    })
})