import { FormControl, InputGroup, Form } from 'react-bootstrap';
import React, { ChangeEventHandler } from 'react';

import './index.scss';
import useDisplayValues from '../../hooks/displayValues';

export default ({
	value,
	onChange,
	label,
	id,
	type,
	append,
	showFiatFromSatsValue
}: {
	value: string;
	onChange: ChangeEventHandler;
	label: string;
	id: string;
	type: 'number' | 'text';
	append: string;
	showFiatFromSatsValue?: boolean;
}): JSX.Element => {
	const fiat = useDisplayValues(Number(value));

	return (
		<div className='custom-input-group-container'>
			<Form.Label htmlFor={id}>{label}</Form.Label>
			<InputGroup className='custom-input-group'>
				{append ? <InputGroup.Text className='custom-form-append'>{append}</InputGroup.Text> : null}
				<FormControl
					className='custom-form-control'
					id={id}
					type={type}
					value={value}
					onChange={onChange}
				/>
			</InputGroup>
			{showFiatFromSatsValue ? (
				<div className={'bottom-label'}>
					<span>
						{fiat.fiatSymbol} {fiat.fiatFormatted}
					</span>
				</div>
			) : null}
		</div>
	);
};
