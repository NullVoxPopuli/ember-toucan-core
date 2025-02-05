import Component from '@glimmer/component';
import { assert } from '@ember/debug';

import type { onDeleteFileHandler } from './delete-button';

interface ToucanFormFileInputListItemComponentSignature {
  Element: HTMLLIElement;
  Args: {
    file: File;
    onDelete: onDeleteFileHandler;
    deleteLabel: string;
    hasError?: boolean;
    isDisabled?: boolean;
  };
}

export default class ToucanFormFileInputListComponent extends Component<ToucanFormFileInputListItemComponentSignature> {
  constructor(
    owner: unknown,
    args: ToucanFormFileInputListItemComponentSignature['Args']
  ) {
    assert(
      'An "@onDelete" argument is required for Form::FileInput::List. If using Form::Fields::FileInput, this should be provided automatically.',
      args.onDelete !== undefined
    );

    assert(
      'An "@file" argument is required for Form::FileInput::List. If using Form::Fields::FileInput, this should be provided automatically.',
      args.file !== undefined
    );

    assert(
      'An "@deleteLabel" argument is required for Form::FileInput::List. If using Form::Fields::FileInput, this should be provided automatically.',
      args.deleteLabel !== undefined
    );
    super(owner, args);
  }

  formatSize(size: number) {
    return `${Math.round(size / 1000)} KB`;
  }
}
