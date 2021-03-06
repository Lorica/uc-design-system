export default function getImportPath(filePath, baseName) {
  const indexParts = filePath.match(/^packages\/([\w-]+)\/src\/index\.tsx?#(\w+)$/i);

  if (indexParts) {
    const [, packageName, compName] = indexParts;

    return `import ${compName} from '@usercentric/${packageName}';`;
  }

  const parts = filePath.match(/^packages\/([\w-]+)\/src\/components\/(\w+)(\/\w+)?\.tsx#(\w+)$/i);

  if (!parts) {
    return null;
  }

  const [, pkgName, compName, baseChildName] = parts;
  const packageName = pkgName === 'core' ? 'uc-design-system' : `uc-design-system-${pkgName}`;
  const childName = baseChildName ? baseChildName.slice(1) : null;

  // Composer
  if (packageName === 'uc-design-system-composer') {
    if (compName === 'Composer') {
      return `import ${compName} from '@usercentric/${packageName}'`;
    }

    return `import { ${compName || childName} } from '@usercentric/${packageName}'`;
  }

  // Forms
  if (compName === 'Form') {
    return `import ${compName} from '@usercentric/${packageName}'`;
  }

  if (!childName || childName === 'index') {
    return `import ${compName} from '@usercentric/${packageName}/lib/components/${compName}'`;
  }

  return `import { ${childName} } from '@usercentric/${packageName}/lib/components/${compName}'`;
}
