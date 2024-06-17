type IconProps = React.HTMLAttributes<SVGElement>;
interface IconPropSize {
    width: string;
    height: string;
    quality: string;
}
import Image from "next/image";

// The icons that can be used on the website
export const Icons = {
    amadeusLogoPng: (props: IconProps) => (
        <Image
            src="/amadeus_logo.png"
            alt="Amadeus Logo"
            width="100"
            height="70"
            quality="100"
            priority={true}
        />
    ),
    ibmLogoPng: (props: IconProps) => (
        <Image
            src="/ibm_logo.png"
            alt="IBM Logo"
            width="80"
            height="80"
            quality="100"
            priority={true}
        />
    ),
    vishalPng: (props: IconProps) => (
        <Image
            src="/vishal.png"
            alt="Vishal"
            width="80"
            height="80"
            quality="100"
            priority={true}
            />
    ),
    foodClubPng: (props: IconProps) => (
        <Image
            src="/foodclub_logo.png"
            alt="FoodClub Logo"
            width="100"
            height="70"
            quality="100"
            priority={true}
        />
    ),
    tenZymePng: (props: IconProps) => (
        <Image
            src="/10zyme.png"
            alt="10zyme Logo"
            width="80"
            height="80"
            quality="100"
            priority={true}
        />
    ),
    linkedInPng: (props: IconProps) => (
        <Image
            src="/linkedin_icon.png"
            alt="LinkedIn Icon"
            width="100"
            height="100"
            quality="100"
            priority={true}
        />
    ),
    denrJpg: (props: IconProps) => (
        <Image
            src="/denr_logo.jpg"
            alt="Denr Logo"
            width="100"
            height="100"
            quality="100"
            priority={true}
        />
    ),
    appenJpg: (props: IconProps) => (
        <Image
            src="/appen_logo.jpg"
            alt="Appen Logo"
            width="100"
            height="100"
            quality="100"
            priority={true}
        />
    ),
    nxtuitionsJpg: (props: IconProps) => (
        <Image
            src="/nxtuitions_logo.jpg"
            alt="NxTuitions Logo"
            width="100"
            height="100"
            quality="100"
            priority={true}
        />
    ),
    devoirJpg: (props: IconProps) => (
        <Image
            src="/devoir_logo.jpg"
            alt="Devoir Logo"
            width="80"
            height="60"
            quality="100"
            priority={true}
        />
    ),
    kclPng: (props: IconProps) => (
        <Image
            src="/kcl.png"
            alt="KCL Logo"
            width="80"
            height="60"
            quality="100"
            priority={true}
        />
    ),
    golangPng: (props: IconProps) => (
        <Image
            src="/golang.png"
            alt="Golang Logo"
            width="300"
            height="300"
            quality="100"
            priority={true}
            />
    ),
    cPlusPlusPng: (props: IconProps) => (
        <Image
            src="/c++_logo.png"
            alt="C++ Logo"
            width="150"
            height="150"
            quality="100"
            priority={true}
            />
    ),
    javaPng: (props: IconProps) => (
        <Image
            src="/java_logo.jpg"
            alt="Java Logo"
            width="300"
            height="300"
            quality="100"
            priority={true}
            />
    ),
    javascriptPng: (props: IconProps) => (
        <Image
            src="/javascript_logo.jpg"
            alt="JavaScript Logo"
            width="150"
            height="150"
            quality="100"
            priority={true}
            />
    ),
    pythonPng: (props: IconProps) => (
        <Image
            src="/python_logo.png"
            alt="Python Logo"
            width="120"
            height="120"
            quality="100"
            priority={true}
            />
    ),
    rustPng: (props: IconProps) => (
        <Image
            src="/rust_logo.png"
            alt="Rust Logo"
            width="150"
            height="150"
            quality="100"
            priority={true}
            />
    ),
    typescriptPng: (props: IconProps) => (
        <Image
            src="/typescript_logo.png"
            alt="TypeScript Logo"
            width="150"
            height="150"
            quality="100"
            priority={true}
            />
    ),
    azureJpg: (props: IconProps) => (
        <Image
            src="/azure_logo.jpg"
            alt="Microsoft Azure Logo"
            width="75"
            height="75"
            quality="100"
            priority={true}
            />
    ),
    awsPng: (props: IconProps) => (
        <Image
            src="/aws_logo.png"
            alt="AWS Logo"
            width="250"
            height="250"
            quality="100"
            priority={true}
            />
    ),
    gitPng: (props: IconProps) => (
        <Image
            src="/git_logo.png"
            alt="Git Logo"
            width="300"
            height="300"
            quality="100"
            priority={true}
            />
    ),
    redisPng: (props: IconProps) => (
        <Image
            src="/redis_logo.png"
            alt="Redis Logo"
            width="700"
            height="700"
            quality="100"
            priority={true}
            />
    ),
    dockerPng: (props: IconProps) => (
        <Image
            src="/docker_logo.jpg"
            alt="Docker Logo"
            width="250"
            height="250"
            quality="100"
            priority={true}
            />
    ),
    kubernetesPng: (props: IconProps) => (
        <Image
            src="/kubernetes_logo.png"
            alt="Kubernetes Logo"
            width="250"
            height="250"
            quality="100"
            priority={true}
            />
    ),
    githubActionsPng: (props: IconProps) => (
        <Image
            src="/github_actions.png"
            alt="Github Actions Logo"
            width="250"
            height="250"
            quality="100"
            priority={true}
            />
    ),
    terraformPng: (props: IconProps) => (
        <Image
            src="/terraform_logo.png"
            alt="Terraform Logo"
            width="400"
            height="600"
            quality="100"
            priority={true}
            />
    ),
    slackPng: (props: IconProps) => (
        <Image
            src="/slack_logo.png"
            alt="Slack Logo"
            width="250"
            height="250"
            quality="100"
            priority={true}
            />
    ),
    jiraPng: (props: IconProps) => (
        <Image
            src="/jira_logo.png"
            alt="Jira Logo"
            width="200"
            height="200"
            quality="100"
            priority={true}
            />
    ),
    prometheusPng: (props: IconProps) => (
        <Image
            src="/prometheus.png"
            alt="Prometheus Logo"
            width="250"
            height="250"
            quality="100"
            priority={true}
            />
    ),

    dataVisualizationPng: (props: IconProps) => (
        <Image
            src="/data_visualization.jpeg"
            alt="Data Visualization"
            width="250"
            height="250"
            quality="100"
            priority={true}
            />
    ),
    hyperoptPng: (props: IconProps) => (
        <Image
            src="/hyperopt.png"
            alt="Hyperopt Logo"
            width="100"
            height="100"
            quality="100"
            priority={true}
            />
    ),
    imageClassificationPng: (props: IconProps) => (
        <Image
            src="/image_classification.jpg"
            alt="Image Classification"
            width="250"
            height="250"
            quality="100"
            priority={true}
            />
    ),
    mnistPng: (props: IconProps) => (
        <Image
            src="/mnist.png"
            alt="MNIST"
            width="150"
            height="150"
            quality="100"
            priority={true}
            />
    ),
    mnistClassificationPng: (props: IconProps) => (
        <Image
            src="/mnist.png"
            alt="MNIST"
            width="75"
            height="75"
            quality="100"
            priority={true}
            />
    ),
    neuralNetworkPng: (props: IconProps) => (
        <Image
            src="/neural_networks.jpg"
            alt="Neural Networks"
            width="150"
            height="150"
            quality="100"
            priority={true}
            />
    ),
    promptEngineeringPng: (props: IconProps) => (
        <Image
            src="/prompt_engineering.png"
            alt="Prompt Engineering"
            width="250"
            height="250"
            quality="100"
            priority={true}
            />
    ),
    reinforcementLearningPng: (props: IconProps) => (
        <Image
            src="/reinforcement_learning.png"
            alt="Reinforcement Learning"
            width="150"
            height="150"
            quality="100"
            priority={true}
            />
    ),
    openaiPng: (props: IconProps) => (
        <Image
            src="/openai_logo.jpg"
            alt="LLM"
            width="150"
            height="150"
            quality="100"
            priority={true}
        />
    ),
    diaryPng: (props: IconProps) => (
        <Image
            src="/diary.jpg"
            alt="Diary"
            width="500"
            height="500"
            quality="100"
            priority={true}
        />
    ),
    timeSeriesPng: (props: IconProps) => (
        <Image
            src="/time_series.jpg"
            alt="LLM"
            width="150"
            height="150"
            quality="100"
            priority={true}
        />
    ),
    hftPng: (props: IconProps) => (
        <Image
            src="/hft.png"
            alt="HFT"
            width="150"
            height="150"
            quality="100"
            priority={true}
        />
    ),
    vercelPng: (props: IconProps) => (
        <Image
            src="/vercel_logo.jpg"
            alt="Vercel Logo"
            width="300"
            height="300"
            quality="100"
            priority={true}
        />
    )
}