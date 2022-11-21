# repository-template

Repository Template with a ready ``.gitattributes`` and a ready [pre-commit configuration](https://pre-commit.com/hooks.html).

### Notes
The ``pre-commit-config.yaml`` is versioned and collaborators of the repository should use [pre-commit](https://pre-commit.com/) to work consistently.
Execute the following command before commiting any first changes:

```console
pre-commit install --hook-type commit-msg
```
